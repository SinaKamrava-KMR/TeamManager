import { styled } from "styled-components";
import Input from "../components/Input";
import FileChooser from "../components/FileChooser";
import Button from "../components/Button";
import SelectBox from "../components/SelectBox";

const Wrapper = styled.div`
  /* background: linear-gradient(137deg, #162345, #070f23); */
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

function AddMember() {
  return (
    <Wrapper>
      <Form>
        <FileChooser/>
        <Input label="Name" />
        <Input label="Last Name" delay={.1} />
        <Input label="Phone Number" delay={.2} />
        <Input label="Email" delay={.3} />
        <SelectBox label='Related' delay={.4}/>
 
        <span className="flex1"></span>
        <Button>Add Member</Button>
      </Form>
    </Wrapper>
  );
}

export default AddMember;
