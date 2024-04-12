"use client";
import React, { useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";

interface UserData {
  id: number;
  title: string;
  sinopse: string;
  createdAt: string;
  tableData?: {
    id: number;
  };
}

const Home: React.FC = () => {
  const [user, setUser] = useState<UserData[]>([]);
  const [iserror, setIserror] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const columns: Column<UserData>[] = [
    { title: "Nome", field: "title" },
    { title: "Sinopse", field: "sinopse" },
  ];

  useEffect(() => {
    axios.get<UserData[]>(`https://localhost:7178/API/Filmes`).then((res) => {
      console.log(res);
      const users = res.data.map((user, index) => ({
        ...user,
        tableData: { id: index },
      }));
      setUser(users);
    });
  }, []);


  const handleRowUpdate = (
    newData: UserData,
    oldData: UserData,
    resolve: () => void
  ) => {
    let errorList: string[] = [];
    if (errorList.length < 1) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")
      axios
        .put(`https://localhost:7178/API/Filmes/${newData.id}`, newData)
        .then((response) => {
          console.log("BBBBBBBBBBBBBBB")
          const updateUser = [...user];
          console.log("CCCCCCCCCCCCCCCC")
          const index = oldData.tableData!.id;
          console.log("DDDDDDDDDDDDDDDDDDDD")
          updateUser[index] = newData;
          console.log("EEEEEEEEEEEEEEEE")
          setUser([...updateUser]);
          console.log("FFFFFFFFFFF")
          resolve();
          setIserror(false);
          setErrorMessages([]);
        })
        .catch((error) => {
          setErrorMessages(["Update failed! Server error"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  const handleRowDelete = (oldData: UserData, resolve: () => void) => {
    axios
      .delete(`https://localhost:7178/API/Filmes/${oldData.id}`)
      .then((response) => {
        const dataDelete = [...user];
        const index = oldData.tableData!.id;
        dataDelete.splice(index, 1);
        setUser([...dataDelete]);
        resolve();
      })
      .catch((error) => {
        setErrorMessages(["Delete failed! Server error"]);
        setIserror(true);
        resolve();
      });
  };

  const handleRowAdd = (newData: UserData, resolve: () => void) => {
    let errorList: string[] = [];

    if (errorList.length < 1) {
      axios
        .post(`https://localhost:7178/API/Filmes`, newData)
        .then((response) => {
          let newUserdata = [...user];
          newUserdata.push(newData);
          setUser(newUserdata);
          window.location.reload();
          resolve();
          setErrorMessages([]);
          setIserror(false);
        })
        .catch((error) => {
          setErrorMessages(["Cannot add data. Server error!"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  return (
    <div className="app" style={{ minHeight: "70vh" }}>
      <MaterialTable
        title="Lista de Filmes"
        columns={columns}
        data={user}
        options={{
          headerStyle: {
            borderBottomColor: "red",
            borderBottomWidth: "3px",
            fontFamily: "verdana",
          },
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise<void>((resolve) => {
              handleRowUpdate(newData, oldData!, resolve);
            }),
          onRowAdd: (newData) =>
            new Promise<void>((resolve) => {
              handleRowAdd(newData, resolve);
            }),
          onRowDelete: (oldData) =>
            new Promise<void>((resolve) => {
              handleRowDelete(oldData, resolve);
            }),
        }}
      />

      <div>
        {iserror && (
          <Alert severity="error">
            <AlertTitle>ERROR</AlertTitle>
            {errorMessages.map((msg, i) => {
              return <div key={i}>{msg}</div>;
            })}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Home;
