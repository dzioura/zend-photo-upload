<?php

class Application_Model_ZendPhoto
{
    protected $_photo;
    protected $_created;
    protected $_file_name;
    protected $_mime;
    protected $_id;
 
    public function __construct(array $options = null)
    {
        if (is_array($options)) {
            $this->setOptions($options);
        }
    }
 
    public function __set($name, $value)
    {
        $method = 'set' . $name;
        if (('mapper' == $name) || !method_exists($this, $method)) {
            throw new Exception('Invalid zend_photo property');
        }
        $this->$method($value);
    }
 
    public function __get($name)
    {
        $method = 'get' . $name;
        if (('mapper' == $name) || !method_exists($this, $method)) {
            throw new Exception('Invalid zend_photo property');
        }
        return $this->$method();
    }
 
    public function setOptions(array $options)
    {
        $methods = get_class_methods($this);
        foreach ($options as $key => $value) {
            $method = 'set' . ucfirst($key);
            if (in_array($method, $methods)) {
                $this->$method($value);
            }
        }
        return $this;
    }
 
    public function setPhoto($file)
    {
        $this->_photo = $file;
        return $this;
    }
 
    public function getPhoto()
    {
        return $this->_photo;
    }
 
    public function setFileName($file_name)
    {
        $this->_file_name = (string) $file_name;
        return $this;
    }
 
    public function getFileName()
    {
        return $this->_file_name;
    }

    public function setMime($mime)
    {
        $this->_mime = (string) $mime;
        return $this;
    }
 
    public function getMime()
    {
        return $this->_mime;
    }
 
    public function setCreated($ts)
    {
        $this->_created = $ts;
        return $this;
    }
 
    public function getCreated()
    {
        return $this->_created;
    }
 
    public function setId($id)
    {
        $this->_id = (int) $id;
        return $this;
    }
 
    public function getId()
    {
        return $this->_id;
    }
}