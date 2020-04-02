<?php

class Application_Form_ZendPhoto extends Zend_Form
{

    public function init()
    {
        // Set the method for the display form to POST
        $this->setMethod('post');
 
        // Add an email element
        $this->addElement('text', 'file_name', array(
            'label'      => 'File Name:',
            'required'   => true,
            'filters'    => array('StringTrim')
        ));
        
        $element = new Zend_Form_Element_File('photo');
        $element->setAttrib('accept','image/*');
        $this->addElement($element);
 
        // Add the submit button
        $this->addElement('submit', 'submit', array(
            'ignore'   => true,
            'label'    => 'Add Photo'
        ));

        $this->setAttrib('enctype', 'multipart/form-data');
 

    }


}

