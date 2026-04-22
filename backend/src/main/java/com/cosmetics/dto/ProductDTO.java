package com.cosmetics.dto;

public class ProductDTO {
    private Long id;
    private String name;
    private String brand;
    private String description;
    private String imageUrl;
    private Double price;
    private Integer stock;
    private Long categoryId;
    private String categoryName;   // ✅ ADD THIS

    public ProductDTO() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }

    public String getCategoryName() { return categoryName; }   // ✅ ADD
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; } // ✅ ADD
}