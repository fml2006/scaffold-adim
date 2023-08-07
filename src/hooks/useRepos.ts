'use client'
import { useQuery } from "@tanstack/react-query";
import api from "@/services/github"
import { Repository } from "@/interfaces/reposType";

const fetchRepos = async () => {
    const { data } = await api.get<Repository[]>('/users/fml2006/repos')
    return data;
}

export function useFetchRepositories(){
    return useQuery(['repos'], fetchRepos)
}
