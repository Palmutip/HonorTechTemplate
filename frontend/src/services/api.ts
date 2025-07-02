import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  // Contact
  contact: '/api/contact',
  
  // Referrals
  referrals: '/api/referrals',
  
  // Services
  services: '/api/services',
  
  // Projects
  projects: '/api/projects',
  
  // Testimonials
  testimonials: '/api/testimonials',
};

// API functions
export const apiService = {
  // Contact form submission
  submitContact: async (data: any) => {
    const response = await api.post(endpoints.contact, data);
    return response.data;
  },

  // Referral form submission
  submitReferral: async (data: any) => {
    const response = await api.post(endpoints.referrals, data);
    return response.data;
  },

  // Get services
  getServices: async () => {
    const response = await api.get(endpoints.services);
    return response.data;
  },

  // Get projects
  getProjects: async () => {
    const response = await api.get(endpoints.projects);
    return response.data;
  },

  // Get testimonials
  getTestimonials: async () => {
    const response = await api.get(endpoints.testimonials);
    return response.data;
  },
};

export default api;