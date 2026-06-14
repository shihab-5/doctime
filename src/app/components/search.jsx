"use client";

import React, { useState } from "react";
import { Input, Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

 const  Search=()=> {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search"));

 

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams?.toString());
    if (searchTerm) params.set("search", searchTerm);
    else params.delete("search");
    router.push(`/appointments?${params.toString()}`);
  };
console.log(searchTerm)

  return (
    <form 
      onSubmit={handleSearch} 
      className="flex gap-2 w-full max-w-md mx-auto mb-8"
    >
      <Input
        label="Search Doctor"
        placeholder="Enter doctor name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="bordered"
        startContent={<FaSearch className="text-slate-400" />}
      />
      <Button 
        type="submit" 
        color="primary" 
      >
        Search
      </Button>
    </form>
  );
}
export default Search;