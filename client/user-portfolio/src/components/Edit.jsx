import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Edit() {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("profile"); // Default modal type

  const handleOpen = () => setOpen(!open);

  const handleInputs = () => {
    switch (modalType) {
      case "profile":
        return (
          <>
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="tel" placeholder="Phone" className="input-field" />
          </>
        );
      case "about":
        return (
          <>
            <input type="text" placeholder="Title" className="input-field" />
            <input type="text" placeholder="Description" className="input-field" />
            <input type="text" placeholder="Category" className="input-field" />
            <input type="text" placeholder="Skills" className="input-field" />
            <input type="text" placeholder="Experience" className="input-field" />
          </>
        );
      case "recentWork":
        return (
          <>
            <input type="text" placeholder="Project Title" className="input-field" />
            <input type="text" placeholder="Description" className="input-field" />
            <input type="text" placeholder="Tech Stack" className="input-field" />
            <input type="text" placeholder="Role" className="input-field" />
            <input type="text" placeholder="Duration" className="input-field" />
            <input type="text" placeholder="Link" className="input-field" />
            <input type="text" placeholder="Outcome" className="input-field" />
          </>
        );
      case "languages":
        return (
          <>
            <input type="text" placeholder="Language 1" className="input-field" />
            <input type="text" placeholder="Language 2" className="input-field" />
          </>
        );
      case "tools":
        return <input type="text" placeholder="Tools" className="input-field" />;
      case "skills":
        return <input type="text" placeholder="Skills" className="input-field" />;
      case "experience":
        return (
          <>
            <input type="text" placeholder="Company Name" className="input-field" />
            <input type="text" placeholder="Position" className="input-field" />
            <input type="text" placeholder="Duration" className="input-field" />
            <input type="text" placeholder="Responsibilities" className="input-field" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Button onClick={() => { setModalType("profile"); handleOpen(); }} variant="text">
        <span className="material-icons text-2xl md:text-3xl">edit_note</span>
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent backdrop-blur-md shadow-lg border-2 rounded-lg max-w-5xl w-full h-auto max-h-[70vh] my-auto mx-auto fixed inset-0 z-50"
      >
        <DialogHeader>{modalType.charAt(0).toUpperCase() + modalType.slice(1)} Modal</DialogHeader>
        <DialogBody>
          <form>
            <div className="flex flex-col gap-4">{handleInputs()}</div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-2">
            <span>Cancel</span>
          </Button>
          <Button className="bg-sky-300 px-4" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Edit;
