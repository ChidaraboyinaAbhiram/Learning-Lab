import axios from 'axios';
const { token } = useAuth();


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Response Error:', error);
    const message = error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(message);
  }
);

// Experiments API
export const getAllExperiments = (search = '', page = 1, limit = 20) => {
  const params = new URLSearchParams();
  if (search) params.append('search', search);
  params.append('page', page.toString());
  params.append('limit', limit.toString());
  
  return api.get(`/experiments?${params}`);
  headers: { Authorization: `Bearer ${token}` }
};

export const getExperimentById = (id) => {
  return api.get(`/experiments/${id}`);
};

export const createExperiment = (experimentData) => {
  return api.post('/experiments', experimentData);
};

export const updateExperiment = (id, experimentData) => {
  return api.put(`/experiments/${id}`, experimentData);
};

export const deleteExperiment = (id) => {
  return api.delete(`/experiments/${id}`);
};

// Quiz API
export const submitQuiz = (expId, subExpId, answers) => {
  return api.post(`/quizzes/submit/${expId}/${subExpId}`, { answers });
};

// Health check
export const checkApiHealth = () => {
  return api.get('/health');
};

export default api;
