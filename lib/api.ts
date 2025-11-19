/**
 * API integration for Climate Dashboard
 * Connects Next.js frontend to Django backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface TemperatureStats {
  latest: number;
  average: number;
  min: number;
  max: number;
  trend: string;
  total_records: number;
}

export interface CO2Stats {
  latest: number;
  average: number;
  min: number;
  max: number;
  trend: string;
  total_records: number;
}

export interface SeaLevelStats {
  latest: number;
  average: number;
  min: number;
  max: number;
  trend: string;
  total_records: number;
}

export interface TemperatureData {
  id: number;
  year: number;
  month: number | null;
  temperature_anomaly: number;
  source: string;
  created_at: string;
  updated_at: string;
}

export interface CO2Data {
  id: number;
  year: number;
  month: number | null;
  day: number | null;
  co2_ppm: number;
  source: string;
  location: string;
  created_at: string;
  updated_at: string;
}

export interface SeaLevelData {
  id: number;
  year: number;
  sea_level_mm: number;
  source: string;
  measurement_type: string;
  created_at: string;
  updated_at: string;
}

/**
 * Fetch temperature statistics
 */
export async function getTemperatureStats(): Promise<TemperatureStats> {
  const response = await fetch(`${API_URL}/temperature/stats/`);
  if (!response.ok) {
    throw new Error('Failed to fetch temperature stats');
  }
  return response.json();
}

/**
 * Fetch recent temperature data
 */
export async function getRecentTemperatureData(): Promise<TemperatureData[]> {
  const response = await fetch(`${API_URL}/temperature/recent/`);
  if (!response.ok) {
    throw new Error('Failed to fetch temperature data');
  }
  return response.json();
}

/**
 * Fetch CO2 statistics
 */
export async function getCO2Stats(): Promise<CO2Stats> {
  const response = await fetch(`${API_URL}/co2/stats/`);
  if (!response.ok) {
    throw new Error('Failed to fetch CO2 stats');
  }
  return response.json();
}

/**
 * Fetch recent CO2 data
 */
export async function getRecentCO2Data(): Promise<CO2Data[]> {
  const response = await fetch(`${API_URL}/co2/recent/`);
  if (!response.ok) {
    throw new Error('Failed to fetch CO2 data');
  }
  return response.json();
}

/**
 * Fetch sea level statistics
 */
export async function getSeaLevelStats(): Promise<SeaLevelStats> {
  const response = await fetch(`${API_URL}/sea-level/stats/`);
  if (!response.ok) {
    throw new Error('Failed to fetch sea level stats');
  }
  return response.json();
}

/**
 * Fetch recent sea level data
 */
export async function getRecentSeaLevelData(): Promise<SeaLevelData[]> {
  const response = await fetch(`${API_URL}/sea-level/recent/`);
  if (!response.ok) {
    throw new Error('Failed to fetch sea level data');
  }
  return response.json();
}

/**
 * Check API health
 */
export async function checkAPIHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/temperature/stats/`);
    return response.ok;
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
}
