import { useState, useRef, useEffect } from "react"
import "./addChat.scss"

const AddChat = (props) => {
  const formElement = useRef();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    comments: "",
  });

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    props.handleAddChat(formData);
  };

  return (
    <>
      
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comments-input" className="form-label"></label>
          <input
            className="chat-form"
            type="text"
            id="comments-input"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
          />
        </div>
        <div >
          <button type="submit" disabled={!validForm} className="send-btn">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default AddChat;
