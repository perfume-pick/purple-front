"use client";
import axios, { AxiosError } from "axios";
import { getPerfumePreference } from "@/service/server/serverTest";

function EvaluationPage() {
  const response = getPerfumePreference();
  console.log(response);

  // axios.delete("/api/delete-token");
  const baseUrl = "http://localhost:3000";
  fetch(`${baseUrl}/api/delete-token`, {
    method: "DELETE",
  });

  return (
    <>
      <div>EvaluationPage</div>
    </>
  );
}
export default EvaluationPage;
