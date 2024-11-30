import React from 'react';
import Edit from './Edit';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
  } from "@material-tailwind/react";

function DashContent() {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

  return (
    <div className="pb-5">
      <div className="px-5 py-3 w-full">
        <div className="w-full shadow-md rounded-md p-3 mb-7 bg-gray-100">
          <h2 className="text-xl text-green-600 font-semibold mb-1">Profile</h2>
        
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border bg-gray-200 overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Profile Pic</p>
            <p>Name</p>
            <p>Position</p>
            <p>About</p>
            <p>Resume</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-1 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
              <div className="flex-shrink-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                  className="w-16 h-16 md:w-20 md:h-20 bg-no-repeat object-cover rounded-full mx-auto border mb-4 hover:border-black hover:p-1 hover:bg-slate-200 duration-300"
                  alt="user profile"
                />
              </div>
              <p>Name</p>
              <p>Position</p>
              <p>About</p>
              <p>Resume</p>
              <div className="flex items-center gap-3">
                <Edit/>

                <Button onClick={handleOpen} variant="text">   <span className="material-icons text-2xl md:text-3xl">delete</span></Button>
                    <Dialog open={open} handler={handleOpen}
                        className="bg-transprent backdrop-blur-md shadow-lg border-2 rounded-lg max-w-sm w-full h-auto lg:max-h-[30vh] my-auto mx-auto  fixed inset-0 z-50"

                    >
                        <DialogHeader>
                        </DialogHeader>
                        <DialogBody divider className="grid place-items-center gap-4">
                            <span className="material-icons text-6xl">delete_forever</span>
                        
                        <Typography color="red" variant="h4">
                           Do you want Delete?
                        </Typography>
                        <Typography className="text-center font-normal">
                            Profile information.
                        </Typography>
                        </DialogBody>
                        <DialogFooter className="space-x-4 flex justify-end items-center">
                        <Button variant="text" onClick={handleOpen}>
                            close
                        </Button>
                        <Button variant="text" className='bg-black text-white px-3' onClick={handleOpen}>
                            Delete forever
                        </Button>
                        </DialogFooter>
                    </Dialog>

                {/* <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button> */}
              </div>
            </div>
          ))}
        </div>
    

        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">About</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>About Pic</p>
            <p>College or institute</p>
            <p>Subject</p>
            <p>Year start</p>
            <p>Year end</p>
            <p>Link</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-1 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
              <div className="flex-shrink-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                  className="w-16 h-16 md:w-20 md:h-20 bg-no-repeat object-cover mx-auto border mb-4 hover:border-black hover:p-1 hover:bg-slate-200 duration-300"
                  alt="user profile"
                />
              </div>
              <p>Name</p>
              <p>Position</p>
              <p>About</p>
              <p>Resume</p>
              <p>Resume</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">Languages</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Language</p>
            <p>Priference</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-5 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
              <p>Language</p>
              <p>Preferece</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">Services</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Service</p>
            <p>About</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-5 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
             <p>Service</p>
             <p>About</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>

        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">Currently doing</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Position</p>
            <p>Company Name</p>
            <p>Start year</p>
            <p>End year</p>
            <p>About</p>
            <p>Location</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-5 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
              <p>Name</p>
              <p>Position</p>
              <p>About</p>
              <p>About</p>
              <p>About</p>
              <p>Resume</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">Experiance</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Start year</p>
            <p>End year</p>
            <p>Position</p>
            <p>C Name</p>
            <p>About</p>
            <p>Location</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-5 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
             <p>Start year</p>
            <p>End year</p>
            <p>Position</p>
            <p>C Name</p>
            <p>About</p>
            <p>Location</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">Skills</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Slill</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-5 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
              <p>Slill</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">Tools</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Tools</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-5 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
                 <p>Tools</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>


        <div className="border w-full shadow-md rounded-md p-3 mb-7">
          <h2 className="text-xl text-green-600 font-semibold mb-4">Recent works</h2>
          
          {/* Header Row */}
          <div className="flex justify-between shadow-md mb-5 mt-2 p-4 border overflow-x-auto gap-5 text-center text-sm md:text-base">
            <p>Profile Pic</p>
            <p>project Name</p>
            <p>Work type</p>
            <p>Project type</p>
            <p>Link</p>
            <p>Actions</p>
          </div>
          
          {/* Profile Data Rows */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 mb-5 p-4 overflow-x-auto gap-5 text-sm md:text-base"
            >
              <div className="flex-shrink-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                  className="w-16 h-16 md:w-20 md:h-20 bg-no-repeat object-cover  mx-auto border mb-4 hover:border-black hover:p-1 hover:bg-slate-200 duration-300"
                  alt="user profile"
                />
              </div>
                <p>project Name</p>
                <p>Work type</p>
                <p>Project type</p>
                <p>Link</p>
              <div className="flex items-center gap-3">
                <button>
                  <span className="material-icons text-2xl md:text-3xl">edit_note</span>
                </button>
                <button>
                  <span className="material-icons text-2xl md:text-3xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DashContent;
