import { useSession } from "next-auth/react";
import { withAuth } from "../lib/authcheck.js";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import DataTable from "@/components/DataTable.jsx";
import { columnsPostulations } from "@/components/columns";
import { SkeletonRow } from "@/components/TableSkeleton";
import { Button } from "@/components/ui/button.jsx";
import { toast } from "@/components/ui/use-toast";

const PostulationsComponent = () => {
  const { data: session, status } = useSession();
  const axiosPrivate = useAxiosPrivate();

  const {
    isLoading,
    data: postulations,
    error,
    isError,
  } = useQuery({
    queryKey: ["postulations"],
    queryFn: async () => {
      const response = await axiosPrivate.get("api/postulations/");

      const mappedData = response.data.map((postulation) => ({
        id: postulation.id,
        ucc_key: postulation.student_user.ucc_key,
        student_name:
          postulation.student_user.last_name +
          ", " +
          postulation.student_user.first_name,
        careers: postulation.student_user.careers.join(", "),
        profile_picture: postulation.student_user.profile_picture,
        status: postulation.status,
      }));

      console.log("Mapped data:", mappedData);

      return mappedData;
    },
    staleTime: 0,
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="min-h-screen flex flex-col w-screen">
          <div>
            <Navbar />
            <h1 className="my-10 text-2xl font-bold"> Postulaciones </h1>
            {isLoading ? (
              <div className="m-10 rounded-md border">
                <Table>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Clave UCC</TableHead>
                    <TableHead>Apellido y Nombre</TableHead>
                    <TableHead>Fotografía</TableHead>
                    <TableHead>Careras</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                  <TableBody>
                    <SkeletonRow ncolumns={columnsPostulations.length} mrows={10} />
                  </TableBody>
                </Table>
              </div>
            ) : isError ? (
              <div className="m-10 rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Clave UCC</TableHead>
                      <TableHead>Apellido y Nombre</TableHead>
                      <TableHead>Fotografía</TableHead>
                      <TableHead>Careras</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableRow>
                    <TableCell colSpan="7">
                      <p> Error al obtener las postulaciones</p>
                    </TableCell>
                  </TableRow>
                </Table>
              </div>
            ) : postulations.length > 0 ? (
              <DataTable columns={columnsPostulations} data={postulations} />
            ) : (
              <div className="m-10 rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Clave UCC</TableHead>
                      <TableHead>Apellido y Nombre</TableHead>
                      <TableHead>Fotografía</TableHead>
                      <TableHead>Careras</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableRow>
                    <TableCell colSpan="7">
                      <p>
                        {" "}
                        No existen postulaciones para esta unidad académica{" "}
                      </p>
                    </TableCell>
                  </TableRow>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(PostulationsComponent);
