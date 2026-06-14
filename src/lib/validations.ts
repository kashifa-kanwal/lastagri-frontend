// Comprehensive validation utilities for AgriConnect

export interface ValidationResult {
    isValid: boolean;
    error: string;
}

// ============================================
// CNIC VALIDATION (Pakistani National ID)
// Format: XXXXX-XXXXXXX-X (13 digits with dashes)
// ============================================
export function validateCNIC(cnic: string): ValidationResult {
    // Remove any spaces
    const cleaned = cnic.replace(/\s/g, '');

    // Check if empty
    if (!cleaned) {
        return { isValid: false, error: 'CNIC is required' };
    }

    // Pattern: 5 digits - 7 digits - 1 digit OR 13 digits without dashes
    const withDashes = /^\d{5}-\d{7}-\d{1}$/;
    const withoutDashes = /^\d{13}$/;

    if (!withDashes.test(cleaned) && !withoutDashes.test(cleaned)) {
        return { isValid: false, error: 'CNIC must be in format XXXXX-XXXXXXX-X (e.g., 35201-1234567-1)' };
    }

    // Extract digits only for checksum validation
    const digits = cleaned.replace(/-/g, '');

    // First digit indicates province (1-5 for provinces, 6-7 for federal areas)
    const provinceCode = parseInt(digits[0]);
    if (provinceCode < 1 || provinceCode > 7) {
        return { isValid: false, error: 'Invalid CNIC: First digit must be between 1-7' };
    }

    // Last digit indicates gender (odd = male, even = female)
    // This is just informational, not a validation error

    return { isValid: true, error: '' };
}

// ============================================
// PHONE NUMBER VALIDATION (Pakistani)
// Format: 03XX-XXXXXXX or 03XXXXXXXXX
// ============================================
export function validatePhoneNumber(phone: string): ValidationResult {
    const cleaned = phone.replace(/[\s-]/g, '');

    if (!cleaned) {
        return { isValid: false, error: 'Phone number is required' };
    }

    // Pakistani mobile: starts with 03, total 11 digits
    const mobilePattern = /^03\d{9}$/;

    // Landline with area code: 0XX-XXXXXXX (10-11 digits)
    const landlinePattern = /^0\d{9,10}$/;

    if (!mobilePattern.test(cleaned) && !landlinePattern.test(cleaned)) {
        return { isValid: false, error: 'Enter valid Pakistani phone (e.g., 03001234567)' };
    }

    // Check for obviously fake numbers
    const repeatingPattern = /^03(\d)\1{8}$/; // e.g., 03111111111
    if (repeatingPattern.test(cleaned)) {
        return { isValid: false, error: 'Please enter a valid phone number' };
    }

    return { isValid: true, error: '' };
}

// ============================================
// EMAIL VALIDATION
// ============================================
export function validateEmail(email: string): ValidationResult {
    if (!email) {
        return { isValid: false, error: 'Email is required' };
    }

    const trimmed = email.trim().toLowerCase();

    // RFC 5322 compliant email regex (simplified)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(trimmed)) {
        return { isValid: false, error: 'Enter a valid email address' };
    }

    // Check for common typos
    const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const domain = trimmed.split('@')[1];

    // Check for typos like gmial.com, yaho.com
    const typoPatterns = ['gmial', 'gmal', 'gmil', 'yaho', 'hotmal', 'outlok'];
    for (const typo of typoPatterns) {
        if (domain.includes(typo)) {
            return { isValid: false, error: 'Did you mean a common email provider? Check for typos.' };
        }
    }

    return { isValid: true, error: '' };
}

// ============================================
// PASSWORD STRENGTH VALIDATION
// ============================================
export interface PasswordStrength {
    isValid: boolean;
    strength: 'weak' | 'medium' | 'strong';
    score: number;
    errors: string[];
    suggestions: string[];
}

export function validatePassword(password: string): PasswordStrength {
    const errors: string[] = [];
    const suggestions: string[] = [];
    let score = 0;

    // Minimum length
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters');
    } else {
        score += 1;
        if (password.length >= 12) score += 1;
    }

    // Uppercase letter
    if (!/[A-Z]/.test(password)) {
        suggestions.push('Add uppercase letter for stronger password');
    } else {
        score += 1;
    }

    // Lowercase letter
    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    } else {
        score += 1;
    }

    // Number
    if (!/\d/.test(password)) {
        suggestions.push('Add numbers for stronger password');
    } else {
        score += 1;
    }

    // Special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        suggestions.push('Add special characters (!@#$%^&*) for stronger password');
    } else {
        score += 1;
    }

    // Common password check
    const commonPasswords = ['password', '12345678', 'qwerty', 'abc123', 'password123', 'admin123'];
    if (commonPasswords.includes(password.toLowerCase())) {
        errors.push('This password is too common. Choose a unique password.');
        score = 0;
    }

    // Sequential characters check
    if (/(.)\1{2,}/.test(password)) {
        suggestions.push('Avoid repeating characters');
    }

    // Determine strength
    let strength: 'weak' | 'medium' | 'strong' = 'weak';
    if (score >= 5) strength = 'strong';
    else if (score >= 3) strength = 'medium';

    return {
        isValid: errors.length === 0 && password.length >= 8,
        strength,
        score,
        errors,
        suggestions
    };
}

// ============================================
// USERNAME VALIDATION
// ============================================
export function validateUsername(username: string): ValidationResult {
    if (!username) {
        return { isValid: false, error: 'Username is required' };
    }

    const trimmed = username.trim().toLowerCase();

    // Length check
    if (trimmed.length < 4) {
        return { isValid: false, error: 'Username must be at least 4 characters' };
    }

    if (trimmed.length > 20) {
        return { isValid: false, error: 'Username cannot exceed 20 characters' };
    }

    // Only alphanumeric and underscore
    if (!/^[a-z0-9_]+$/.test(trimmed)) {
        return { isValid: false, error: 'Username can only contain letters, numbers, and underscore' };
    }

    // Cannot start with number or underscore
    if (/^[0-9_]/.test(trimmed)) {
        return { isValid: false, error: 'Username must start with a letter' };
    }

    // Reserved usernames
    const reserved = ['admin', 'administrator', 'root', 'system', 'support', 'help', 'test', 'null', 'undefined'];
    if (reserved.includes(trimmed)) {
        return { isValid: false, error: 'This username is reserved. Please choose another.' };
    }

    return { isValid: true, error: '' };
}

// ============================================
// LAND HOLDING VALIDATION (in acres)
// ============================================
export function validateLandHolding(land: string | number): ValidationResult {
    const value = typeof land === 'string' ? parseFloat(land) : land;

    if (isNaN(value)) {
        return { isValid: false, error: 'Please enter a valid number' };
    }

    if (value <= 0) {
        return { isValid: false, error: 'Land holding must be greater than 0' };
    }

    if (value < 0.1) {
        return { isValid: false, error: 'Minimum land holding is 0.1 acres' };
    }

    if (value > 10000) {
        return { isValid: false, error: 'Land holding seems too large. Please verify.' };
    }

    // Check for reasonable precision (max 2 decimal places)
    const decimalPlaces = (value.toString().split('.')[1] || '').length;
    if (decimalPlaces > 2) {
        return { isValid: false, error: 'Land holding can have maximum 2 decimal places' };
    }

    return { isValid: true, error: '' };
}

// ============================================
// NAME VALIDATION
// ============================================
export function validateName(name: string): ValidationResult {
    if (!name || !name.trim()) {
        return { isValid: false, error: 'Name is required' };
    }

    const trimmed = name.trim();

    if (trimmed.length < 2) {
        return { isValid: false, error: 'Name must be at least 2 characters' };
    }

    if (trimmed.length > 50) {
        return { isValid: false, error: 'Name cannot exceed 50 characters' };
    }

    // Allow letters, spaces, and common name characters
    // Including Urdu/Arabic characters
    if (!/^[\p{L}\s'.,-]+$/u.test(trimmed)) {
        return { isValid: false, error: 'Name contains invalid characters' };
    }

    // Check for multiple consecutive spaces
    if (/\s{2,}/.test(trimmed)) {
        return { isValid: false, error: 'Name should not have multiple consecutive spaces' };
    }

    return { isValid: true, error: '' };
}

// ============================================
// BUSINESS NAME VALIDATION
// ============================================
export function validateBusinessName(name: string): ValidationResult {
    if (!name || !name.trim()) {
        return { isValid: false, error: 'Business name is required' };
    }

    const trimmed = name.trim();

    if (trimmed.length < 3) {
        return { isValid: false, error: 'Business name must be at least 3 characters' };
    }

    if (trimmed.length > 100) {
        return { isValid: false, error: 'Business name cannot exceed 100 characters' };
    }

    // Allow alphanumeric, spaces, and common business characters
    if (!/^[\p{L}\p{N}\s&'.,-]+$/u.test(trimmed)) {
        return { isValid: false, error: 'Business name contains invalid characters' };
    }

    return { isValid: true, error: '' };
}

// ============================================
// ADDRESS VALIDATION
// ============================================
export function validateAddress(address: string): ValidationResult {
    if (!address || !address.trim()) {
        return { isValid: false, error: 'Address is required' };
    }

    const trimmed = address.trim();

    if (trimmed.length < 10) {
        return { isValid: false, error: 'Please enter a complete address' };
    }

    if (trimmed.length > 200) {
        return { isValid: false, error: 'Address is too long' };
    }

    return { isValid: true, error: '' };
}

// ============================================
// LOCATION/DISTRICT VALIDATION
// ============================================
export function validateLocation(location: string, fieldName: string = 'Location'): ValidationResult {
    if (!location || !location.trim()) {
        return { isValid: false, error: `${fieldName} is required` };
    }

    const trimmed = location.trim();

    if (trimmed.length < 2) {
        return { isValid: false, error: `${fieldName} must be at least 2 characters` };
    }

    if (trimmed.length > 50) {
        return { isValid: false, error: `${fieldName} cannot exceed 50 characters` };
    }

    // Only letters and spaces (for place names)
    if (!/^[\p{L}\s'-]+$/u.test(trimmed)) {
        return { isValid: false, error: `${fieldName} should contain only letters` };
    }

    return { isValid: true, error: '' };
}

// ============================================
// FORM VALIDATION HELPER
// ============================================
export interface FormErrors {
    [key: string]: string;
}

export function validateFarmerSignup(data: {
    name: string;
    email: string;
    phone_number: string;
    cnic: string;
    district: string;
    tehsil: string;
    village: string;
    land_holding: string;
    username: string;
    password: string;
    confirm_password: string;
}): FormErrors {
    const errors: FormErrors = {};

    // Name
    const nameResult = validateName(data.name);
    if (!nameResult.isValid) errors.name = nameResult.error;

    // Email
    const emailResult = validateEmail(data.email);
    if (!emailResult.isValid) errors.email = emailResult.error;

    // Phone
    const phoneResult = validatePhoneNumber(data.phone_number);
    if (!phoneResult.isValid) errors.phone_number = phoneResult.error;

    // CNIC
    const cnicResult = validateCNIC(data.cnic);
    if (!cnicResult.isValid) errors.cnic = cnicResult.error;

    // District
    const districtResult = validateLocation(data.district, 'District');
    if (!districtResult.isValid) errors.district = districtResult.error;

    // Tehsil
    const tehsilResult = validateLocation(data.tehsil, 'Tehsil');
    if (!tehsilResult.isValid) errors.tehsil = tehsilResult.error;

    // Village
    const villageResult = validateLocation(data.village, 'Village');
    if (!villageResult.isValid) errors.village = villageResult.error;

    // Land holding
    const landResult = validateLandHolding(data.land_holding);
    if (!landResult.isValid) errors.land_holding = landResult.error;

    // Username
    const usernameResult = validateUsername(data.username);
    if (!usernameResult.isValid) errors.username = usernameResult.error;

    // Password
    const passwordResult = validatePassword(data.password);
    if (!passwordResult.isValid) {
        errors.password = passwordResult.errors[0] || 'Password is too weak';
    }

    // Confirm password
    if (data.password !== data.confirm_password) {
        errors.confirm_password = 'Passwords do not match';
    }

    return errors;
}

export function validateSupplierSignup(data: {
    business_name: string;
    owner_name: string;
    email: string;
    phone_number: string;
    cnic: string;
    address: string;
    location: string;
    business_type: string;
    username: string;
    password: string;
    confirm_password: string;
}): FormErrors {
    const errors: FormErrors = {};

    // Business name (REQUIRED)
    const businessResult = validateBusinessName(data.business_name);
    if (!businessResult.isValid) errors.business_name = businessResult.error;

    // Owner name (OPTIONAL - only validate if provided)
    if (data.owner_name && data.owner_name.trim()) {
        const nameResult = validateName(data.owner_name);
        if (!nameResult.isValid) errors.owner_name = nameResult.error;
    }

    // Email (REQUIRED)
    const emailResult = validateEmail(data.email);
    if (!emailResult.isValid) errors.email = emailResult.error;

    // Phone (REQUIRED)
    const phoneResult = validatePhoneNumber(data.phone_number);
    if (!phoneResult.isValid) errors.phone_number = phoneResult.error;

    // CNIC (OPTIONAL - only validate if provided)
    if (data.cnic && data.cnic.trim()) {
        const cnicResult = validateCNIC(data.cnic);
        if (!cnicResult.isValid) errors.cnic = cnicResult.error;
    }

    // Address (OPTIONAL - only validate if provided)
    if (data.address && data.address.trim()) {
        const addressResult = validateAddress(data.address);
        if (!addressResult.isValid) errors.address = addressResult.error;
    }

    // Location (OPTIONAL - only validate if provided)
    if (data.location && data.location.trim()) {
        const locationResult = validateLocation(data.location, 'Location');
        if (!locationResult.isValid) errors.location = locationResult.error;
    }

    // Business type (REQUIRED)
    if (!data.business_type) {
        errors.business_type = 'Please select a business type';
    }

    // Username (REQUIRED)
    const usernameResult = validateUsername(data.username);
    if (!usernameResult.isValid) errors.username = usernameResult.error;

    // Password (REQUIRED)
    const passwordResult = validatePassword(data.password);
    if (!passwordResult.isValid) {
        errors.password = passwordResult.errors[0] || 'Password is too weak';
    }

    // Confirm password
    if (data.password !== data.confirm_password) {
        errors.confirm_password = 'Passwords do not match';
    }

    return errors;
}
