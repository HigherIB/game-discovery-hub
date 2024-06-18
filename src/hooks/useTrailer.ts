import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Trailer>('/games/{0}/achievements');

const useTrailers = () =>{ 

 
 
}

export default useTrailers;
