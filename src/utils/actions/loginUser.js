"use server"

export const loginUser = async(data) => {
    const res = await fetch(`https://api-fresh-harvest.code-commando.com/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      });
    
      const userInfo = await res.json();
      return userInfo;
    return 
};