import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";

// function axiosAuthConfig(method, token, url, body) {
//     return {
//         method: method,
//         url: url,
//         data: body,
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     };
// }

// export function useRetryCall(method) {
//     const [loading, setLoading] = useState(false);
//     const call = async (url, body) => {
//         setLoading(true);
//         try {
//             const token = localStorage.getItem('token');
//             return await axios.request(axiosAuthConfig(method, token, url, body));
//         } catch (err) {
//             const errorMessage = err?.response?.data?.error;
//             if (errorMessage !== 'jwt expired') {
//                 throw err;
//             }
//             const refreshToken = localStorage.getItem('refreshToken');
//             const response = await axios.post('http://localhost:5000/token', { token: refreshToken });
//             const { token: newToken } = response.data;
//             localStorage.setItem('token', newToken);
//             return await axios.request(axiosAuthConfig(method, newToken, url, body));
//         } finally {
//             setLoading(false);
//         }
//     }
//     return [loading, call];
// }


export function useRetryCall(method) {
    const [loading, setLoading] = useState(false);
  
    const call = useCallback(async (url, body = null) => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const config = {
          method,
          url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: body,
        };

        const response = await axios(config);
        return response;
  
      } catch (err) {
        if (err?.response) {
          console.log("Error Response:", err.response);
          const { data, status, statusText } = err.response;
          console.log(`Error details - Status: ${status}, Status Text: ${statusText}`);
          console.log("Error Data:", data);
  
          const errorMessage = data?.error?.message || "Unknown error";
          console.log(errorMessage);
          
          if (errorMessage === "jwt expired") {
            const refreshToken = localStorage.getItem("refreshToken");
  
            const response = await axios.post("http://localhost:5000/token", {
              token: refreshToken,
            });
  
            const { token: newToken } = response.data;
  
            localStorage.setItem("token", newToken);

            const newConfig = {
              method,
              url,
              headers: {
                Authorization: `Bearer ${newToken}`,
              },
              data: body,
            };
            return await axios(newConfig);
          } else {
            throw new Error(`Request failed: ${errorMessage}`);
          }
        } else {
          console.log("Error: No response from server:", err);
          throw err;
        }
      } finally {
        setLoading(false);
      }
    }, [method]);
  
    return [loading, call];
  }
  