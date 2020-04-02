<?php

class ZendPhotoController extends Zend_Controller_Action
{

    public function indexAction()
    {

        $zend_photo = new Application_Model_ZendPhotoMapper();
        $this->view->entries = $zend_photo->fetchAll();
    }

    public function addAction()
    {

        $request = $this->getRequest();
        $form    = new Application_Form_ZendPhoto();

        if ($this->getRequest()->isPost()) {

            if ($form->isValid($request->getPost())) {
                $file_name = $form->file_name->getValue();
                $file_path = $form->photo->getFileName();

                $mapper  = new Application_Model_ZendPhotoMapper();
                $mapper->save($file_name, $file_path);
                return $this->_helper->redirector('index');
            }
        }
 
        $this->view->form = $form;
        
    }

    public function showAction()
    {
        // action body
    }


}





