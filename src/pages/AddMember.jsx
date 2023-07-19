import { styled } from "styled-components";
import Input from "../components/Input";
import FileChooser from "../components/FileChooser";
import Button from "../components/Button";
import SelectBox from "../components/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer, useState } from "react";
import { add, update } from "../store/index.js";
import { createPortal } from "react-dom";
import Toast from "../components/Toast";
const Wrapper = styled.div`
  background: linear-gradient(45deg, #131e3b, #152953);
  height: 100%;
  min-height: 400px;
  width: 100%;
  border-radius: 10px;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding-bottom: 5px;
  position: relative;
`;

function reducer(state, action) {
  switch (action.type) {
    case "user/name":
      return { ...state, userName: action.payload };
    case "user/lastName":
      return { ...state, userLastName: action.payload };
    case "user/phone":
      return { ...state, phone: action.payload };
    case "user/email":
      return { ...state, email: action.payload };
    case "user/related":
      return { ...state, related: action.payload };
    case "user/image":
      return { ...state, image: action.payload };
    case "init":
      return { ...action.payload };
    case "reset":
      return {
        id: 0,
        userName: "",
        userLastName: "",
        phone: "",
        related: "Frinds",
        email: "",
        image: "",
      };
    default:
      throw new Error("Unknown Action Type !!");
  }
}

function AddMember() {
  const [showToast, setShowToast] = useState(false);
  const [taskMessage, setTaskMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const currentUser = useSelector((state) => state.users.currentUser);
  
  const [
    { id, image, userName, userLastName, phone, related, email },
    dispatch,
  ] = useReducer(reducer, currentUser);

  
  const storeDispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(id);
    if (id !== 0) {
      storeDispatch(
        update({
          id,
          image,
          userName,
          userLastName,
          phone,
          related,
          email,
        })
      );
      setTaskMessage("The member successfully updated")
    } else {
      storeDispatch(
        add({
          id: crypto.randomUUID(),
          image,
          userName,
          userLastName,
          phone,
          related,
          email,
        })
      );
      setTaskMessage("The member successfully added")
    }
    dispatch({ type: "reset" });
    setShowToast(true);
  }

  useEffect(() => {
    if (!showToast) return;

    const id = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(id)
    }
  }, [showToast]);

  useEffect(() => {
    const result = [userName, userLastName, phone, email].some(
      (item) => item === ""
    );
    if (!result) setIsEmpty(false);
    else setIsEmpty(true);
  }, [userName, userLastName, phone, email]);

  useEffect(() => {
    dispatch({type:'init',payload:currentUser})
  },[currentUser])

  return (
    <Wrapper>
      {showToast && createPortal(<Toast message={taskMessage} />,document.body)}
      <Form onSubmit={handleOnSubmit}>
        <FileChooser dispatch={dispatch} image={image} />
        <Input
          name="user/name"
          value={userName}
          label="Name"
          pattern="^[a-zA-Z]{3,}$"
          dispatch={dispatch}
          errorMessage="Invalid User Name (more than 2 length / without $#@!)"
        />
        <Input
          name="user/lastName"
          value={userLastName}
          dispatch={dispatch}
          label="Last Name"
          pattern="^[a-zA-Z]{3,}$"
          errorMessage="Invalid Last Name (more than 2 length / without $#@!)"
          delay={0.1}
        />
        <Input
          name="user/phone"
          value={phone}
          label="Phone Number"
          pattern="^\d{0,11}$"
          errorMessage="Invalid Number (less than 11 length / without char)"
          dispatch={dispatch}
          delay={0.2}
        />
        <Input
          name="user/email"
          value={email}
          label="Email"
          pattern="^\S+@\S+\.\S+$"
          errorMessage="Invalid Email"
          dispatch={dispatch}
          delay={0.3}
        />
        <SelectBox
          name="user/related"
          value={related}
          label="Related"
          dispatch={dispatch}
          delay={0.4}
        />

        <span className="flex1"></span>
        <Button type={isEmpty ? "deactive" : "active"}>
          {id === 0 ? "Add Member" : "Edit"}
        </Button>
      </Form>
    </Wrapper>
  );
}

export default AddMember;
