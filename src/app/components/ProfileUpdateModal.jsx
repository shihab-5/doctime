import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { FiEdit3 } from 'react-icons/fi';
import { editProfile } from '../lib/action';

const ProfileUpdateModal = ({user}) => {

  console.log(user)
      const onSubmit = async(e) => {
        e.preventDefault()
        const formData= new FormData(e.currentTarget)
        console.log(formData)
        const updateUser=Object.fromEntries(formData.entries())
        console.log(user,'user')
    toast.success('updated profile successfully');

      const data= await editProfile(updateUser,user.id)
  // console.log(data)
  };

    return (
        <div>
              <Modal>
      <Button  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-2"
                  >
                    <FiEdit3 className="w-4 h-4" />
                    Modify Profile Details</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <svg 
                className="w-9 h-9 text-blue-600" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M12 8v8"/>
                <path d="M9 12h6"/>
              </svg>
              </Modal.Icon>
              <Modal.Heading>update profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
               Personalize your account by updating your profile information. Changes will be reflected across your account immediately.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" defaultValue={user?.name}  name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input />
                  </TextField>
                  <TextField className="w-full" defaultValue={user?.image} name="url" type='url' variant="secondary">
                    <Label>Image URL</Label>
                    <Input  />
                  </TextField>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button        
 type='submit' slot="close">Save Changes
 </Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default ProfileUpdateModal;