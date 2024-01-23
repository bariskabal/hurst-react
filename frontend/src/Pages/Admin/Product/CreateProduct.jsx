import { Form, Input, Button, message, Select } from "antd";
import ProductStock from "./ProductStock/ProductStock";
import { useEffect, useState } from "react";

export default function CreateProduct() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const token = JSON.parse(localStorage.getItem("token"));
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);

  const [selectedColors, setSelectedColors] = useState([]);

  // Bir renk seçildiğinde çağrılacak fonksiyon
  const handleColorSelect = (stockName, color) => {
    const newSelectedColors = selectedColors.filter(item => item.name !== stockName);
    newSelectedColors.push({ name: stockName, color });
    setSelectedColors(newSelectedColors);
  };
  
  const removeStock = (remove, name) => {
    remove(name);
    const newSelectedColors = selectedColors.filter(item => item.name !== name);
    setSelectedColors(newSelectedColors);
  };

  const handleSubmit = async (values) => {
    console.log(values)
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("discount", values.discount);
    formData.append("description", values.description);
    formData.append("category", values.category);

    values.stocks.forEach((stock, index) => {
      formData.append(`stocks[${index}][color]`, stock.color);
      formData.append(`stocks[${index}][stockQuantity]`, stock.stockQuantity);
      stock.images.forEach((file, fileIndex) => {
        formData.append(
          `stocks[${index}][images][${fileIndex}]`,
          file.originFileObj
        );
      });
    });

    try {
      const response = await fetch(`${apiUrl}/products`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        message.success("Ürün başarıyla eklendi");
        form.resetFields();
        form.setFieldsValue({
          stocks: [{ color: null, stockQuantity: 1, images: [] }],
        }); // Stok satırını varsayılan olarak 1 ile başlat
        setSelectedColors([]);
      } else {
        message.error("Ürün eklenirken bir hata oluştu");
      }
    } catch (error) {
      console.error("İstek sırasında bir hata oluştu:", error);
      message.error("İstek sırasında bir hata oluştu");
    }
  };

  useEffect(() => {
    // Sayfa ilk yüklendiğinde varsayılan bir stok satırı eklemek için useEffect kullanıyoruz
    form.setFieldsValue({
      stocks: [{ color: "", stockQuantity: 1, images: [] }],
    });
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/categories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.status == 200) {
          setCategories(data);
        } else {
          message.error(
            response.status == 401 ? data.error : "Bir sorun oluştu"
          );
        }
      } catch (err) {
        console.log("Giriş hatası:", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    // Formun başlangıç değerlerini ayarlayarak en az bir stok alanı ile başlatın
    form.setFieldsValue({
      stocks: [{ color: null, stockQuantity: 1, images: [] }],
    });
  }, [form]);

  return (
    <Form
      form={form}
      name="createProductForm"
      layout="vertical"
      onFinish={handleSubmit}
      style={{ textAlign: "center" }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Form.Item
        label="Ürün Adı"
        name="name"
        rules={[{ required: true, message: "Lütfen ürün adını giriniz!" }]}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ürün Fiyatı"
        name="price"
        rules={[{ required: true, message: "Lütfen ürün fiyatını giriniz!" }]}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ürün İndirimi (yoksa 0)"
        name="discount"
        rules={[{ required: true, message: "Lütfen ürün adını giriniz!" }]}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ürün Açıklaması"
        name="description"
        rules={[
          { required: true, message: "Lütfen ürün açıklamasını giriniz!" },
        ]}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Kategori"
        name="category"
        rules={[{ required: true, message: "Lütfen bir kategori seçiniz!" }]}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Select placeholder="Kategori Seçiniz" allowClear>
          {categories.map((category) => (
            <Select.Option key={category._id} value={category._id}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.List name="stocks">
  {(fields, { add, remove }) => (
    <>
      {fields.map(({ key, name, ...restField }) => (
        <ProductStock
          key={key}
          name={name}
          remove={() => removeStock(remove, name)}
          selectedColors={selectedColors}
          onColorSelect={(color) => handleColorSelect(name, color)}
        />
      ))}
      <Button type="dashed" onClick={() => add()} style={{ width: "100%", maxWidth: "500px" }} block>
        Stok Ekle
      </Button>
    </>
  )}
</Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Gönder
        </Button>
      </Form.Item>
    </Form>
  );
}
