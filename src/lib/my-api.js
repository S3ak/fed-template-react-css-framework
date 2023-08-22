import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const BASE_URL = "https://dummyjson.com";

export async function fetchAllPosts() {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export function useAllPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchAllPosts(),
  });
}

export async function fetchUsersPosts(id) {
  try {
    const response = await axios.get(`${BASE_URL}/posts/user/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export function useUsersPosts(userId) {
  return useQuery({
    queryKey: ["usersPosts", userId],
    queryFn: () => fetchUsersPosts(userId),
    enabled: !!userId,
  });
}

export async function fetchUser(id) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export function useUser(userId) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  });
}

export async function login({ username, password }) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export function useLogin(username, password) {
  return useMutation({
    mutationFn: () => login(username, password),
  });
}
