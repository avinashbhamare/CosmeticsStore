package com.cosmetics.dto;

import java.util.List;

public class CartDTO {
    private Long id;
    private List<CartItemDTO> items;
    private Double total;

    public CartDTO() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public List<CartItemDTO> getItems() { return items; }
    public void setItems(List<CartItemDTO> items) { this.items = items; }

    public Double getTotal() { return total; }
    public void setTotal(Double total) { this.total = total; }
}