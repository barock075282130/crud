"use client";

import { useState } from "react";
import FormUser from "./FormUser";

const ListUser = ({ user, deleteFunc, selectEditUser }) => {
  if (!user) {
    return <div>No user</div>;
  }
  return (
    <div className="bg-white text-black p-4 pb-1 w-full my-1 border border-gray-300">
      {user.map((items) => (
        <div key={items._id}>
          <div>
            ชื่อ-นามสกุล : {items.fname} {items.lname}
          </div>
          <div>ชื่อเล่น : {items.nickname}</div>
          <div>วันเกิด : {items.bdate.split("-").reverse().join("/")}</div>
          <div>อายุ : {items.age}</div>
          <div>เพศ : {items.gender}</div>
          <div className="flex w-full justify-around my-2">
            <div
              className="w-full text-center border border-black"
              onClick={() => selectEditUser(items)}
            >
              แก้ไข
            </div>
            <div
              className="w-full text-center cursor-pointer border border-black"
              onClick={() => deleteFunc(items._id)}
            >
              ลบ
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Form = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    nickname: "",
    bdate: "",
    age: "",
    gender: "",
  });
  const setStat = () => {
    setEdit(false);
    setUser({
      fname: "",
      lname: "",
      nickname: "",
      bdate: "",
      age: "",
      gender: "",
    });
  };
  const selectEditUser = (userdata) => {
    setId(userdata._id);
    setUser({
      ...user,
      fname: userdata.fname,
      lname: userdata.lname,
      nickname: userdata.nickname,
      bdate: userdata.bdate,
      age: userdata.age,
      gender: userdata.gender,
    });
    setEdit(true);
  };
  const editUser = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8080/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: id,
          fname: user.fname,
          lname: user.lname,
          nickname: user.nickname,
          bdate: user.bdate,
          age: user.age,
          gender: user.gender,
        }),
      });
      setLoading(true);
    } catch (error) {
      console.error("error", error);
    } finally {
      setEdit(false);
      setLoading(false);
      window.location.reload()
    }
  };
  const createUser = async () => {
    try {
      const create = await fetch(`http://localhost:8080/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fname: user.fname,
          lname: user.lname,
          nickname: user.nickname,
          bdate: user.bdate,
          age: user.age,
          gender: user.gender,
        }),
      });
      setLoading(true);
      const json = await create.json();
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };
  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:8080/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: id,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload()
    }
  };
  return (
    <div>
      <FormUser
        create={createUser}
        edit={editUser}
        editStat={edit}
        user={user}
        setUser={setUser}
        loading={loading}
        setStat={setStat}
        stat={edit ? "แก้ไข" : "สร้าง"}
      />

      <div className="flex gap-4">
        <ListUser
          user={data}
          deleteFunc={deleteUser}
          selectEditUser={selectEditUser}
        />
      </div>
    </div>
  );
};

export default Form;
