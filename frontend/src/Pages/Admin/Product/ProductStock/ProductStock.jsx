import { useState, useEffect } from "react";
import { Form, Input, Upload, Button, message, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Proptypes from "prop-types";

const { Dragger } = Upload;

export default function ProductStock({
  name,
  remove,
  selectedColors,
  onColorSelect,
}) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [fileList, setFileList] = useState([]);
  const [colors, setColors] = useState([]);

  const onImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const props = {
    name: "img",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    async onRemove(file) {
      // Kaldırılan dosyanın referansını bulun ve state'ten çıkarın
      const newFileList = fileList.filter((item) => item.uid !== file.uid);
      setFileList(newFileList);
    },
    async onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        message.success(`${info.file.name} file uploading.`);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch(`${apiUrl}/colors`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.status == 200) {
          const availableColors = data.filter(
            (color) => !selectedColors.some(selected => selected.color === color._id && selected.name !== name)
          );
          setColors(availableColors);
        } else {
          message.error(
            response.status == 401 ? data.error : "Bir sorun oluştu"
          );
        }
      } catch (err) {
        console.log("Giriş hatası:", err);
      }
    };
    fetchColors();
  }, [selectedColors,name]);

  const handleColorChange = (value) => {
    onColorSelect(value); // 'value' parametresi renk değerini temsil eder
  };

  return (
    <div style={{ marginBottom: "24px", width: "100%", maxWidth: "500px" }}>
      <Form.Item
        name={[name, "color"]}
        fieldKey={[name, "color"]}
        rules={[{ required: true, message: "Lütfen bir renk seçin" }]}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Renk Seçin"
          onChange={handleColorChange}
        >
          {colors.map((color) => (
            <Select.Option key={color._id} value={color._id}>
              {color.code} {/* Burada color.code veya color.name kullanın */}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name={[name, "stockQuantity"]}
        fieldKey={[name, "stockQuantity"]}
        rules={[{ required: true, message: "Stok miktarı giriniz" }]}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Input placeholder="Stok Miktarı" />
      </Form.Item>

      <Form.Item
        name={[name, "images"]}
        fieldKey={[name, "images"]}
        valuePropName="fileList"
        rules={[{ required: true, message: "Lütfen bir fotoğraf seçin" }]}
        getValueFromEvent={(e) => e && e.fileList}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Dragger
          style={{ width: "100%", maxWidth: "500px" }}
          multiple
          {...props}
          fileList={fileList}
          onChange={onImageChange}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Dragger>
      </Form.Item>

      <Button type="danger" onClick={() => remove(name)}>
        Stok Sil
      </Button>
    </div>
  );
}

ProductStock.propTypes = {
  name: Proptypes.number,
  remove: Proptypes.func,
};
