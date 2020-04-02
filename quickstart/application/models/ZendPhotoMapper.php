<?php

class Application_Model_ZendPhotoMapper
{
	protected $_dbTable;
 
    public function setDbTable($dbTable)
    {
        if (is_string($dbTable)) {
            $dbTable = new $dbTable();
        }
        if (!$dbTable instanceof Zend_Db_Table_Abstract) {
            throw new Exception('Invalid table data gateway provided');
        }
        $this->_dbTable = $dbTable;
        return $this;
    }
 
    public function getDbTable()
    {
        if (null === $this->_dbTable) {
            $this->setDbTable('Application_Model_DbTable_ZendPhoto');
        }
        return $this->_dbTable;
    }
 
    public function save($file_name, $file_path)
    {
        $check = 0;
        do {
            if (file_exists($file_path)) {
                break;
            } else {
                $check++;
            }
        } while(true);

        $img64 = base64_encode(file_get_contents($file_path));
        $imageProperties = getimageSize($file_path);
        $mime = $imageProperties['mime'];
        $image = 'data:image/'.$mime.';base64,'.$img64;


        $data = array(
            'file_name'   => $file_name,
            'photo' => $image,
            'mime' => $mime,
            'created' => date('Y-m-d H:i:s'),
        );
 

        $this->getDbTable()->insert($data);
    }
 
    public function find($id, Application_Model_ZendPhoto $zend_photo)
    {
        $result = $this->getDbTable()->find($id);
        if (0 == count($result)) {
            return;
        }
        $row = $result->current();
        $zend_photo->setId($row->id)
                  ->setFileName($row->file_name)
                  ->setPhoto($row->photo)
                  ->setCreated($row->created);
    }
 
    public function fetchAll()
    {
        $resultSet = $this->getDbTable()->fetchAll();
        $entries   = array();
        foreach ($resultSet as $row) {
            $entry = new Application_Model_ZendPhoto();
            $entry->setId($row->id)
                  ->setFileName($row->file_name)
                  ->setPhoto($row->photo)
                  ->setMime($row->mime)
                  ->setCreated($row->created);
            $entries[] = $entry;
        }
        return $entries;
    }

}