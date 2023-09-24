'use client';

import { FC, Fragment, ReactNode, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface IAppModalButtonProps {
  onClick?: () => void;
}

interface IAppModalProps {
  RenderButton: (props: IAppModalButtonProps) => ReactNode;
  children: ReactNode;
}

export const AppModal: FC<IAppModalProps> = ({ RenderButton, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RenderButton onClick={() => setIsOpen(true)} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-2">
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
