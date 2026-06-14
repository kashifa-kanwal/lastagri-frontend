export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function apiUpload<T>(endpoint: string, formData: FormData): Promise<T> {
    const token = localStorage.getItem('agriconnect_token');
    const headers: HeadersInit = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;

    // 15 minute timeout for OCR processing
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 900000);

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers,
            body: formData,
            signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
            const error = await response.json().catch(() => ({ detail: 'Upload failed' }));
            throw new Error(error.detail || 'Upload failed');
        }
        return response.json();
    } catch (error: any) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Upload timed out. OCR processing may still be running — please refresh to check status.');
        }
        throw error;
    }
}

export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = localStorage.getItem('agriconnect_token');
    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
    } as HeadersInit;

    // Add timeout to prevent hanging forever
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
        console.log(`[API] Making request to: ${API_URL}${endpoint}`);
        console.log(`[API] Token from localStorage:`, token ? token.substring(0, 20) + '...' : 'NO TOKEN');
        console.log(`[API] Authorization header:`, headers.Authorization);

        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers,
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        console.log(`[API] Response status: ${response.status}`);

        if (!response.ok) {
            const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
            throw new Error(error.detail || 'API request failed');
        }

        return response.json();
    } catch (error: any) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            console.error('[API] Request timed out after 30 seconds');
            throw new Error('Request timed out. Please check your connection and try again.');
        }
        console.error('[API] Request failed:', error);
        throw error;
    }
}
