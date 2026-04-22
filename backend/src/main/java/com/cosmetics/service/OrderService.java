package com.cosmetics.service;

import com.cosmetics.dto.OrderDTO;
import com.cosmetics.dto.OrderDTO.OrderItemDTO;
import com.cosmetics.entity.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    // ✅ PLACE ORDER
    public OrderDTO placeOrder(Long userId) {

        // dummy user + cart (you can replace later with DB logic)
        User user = new User();
        Cart cart = user.getCart();

        if (cart == null || cart.getItems().isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        Order order = new Order();
        order.setUser(user);
        order.setOrderDate(LocalDateTime.now());
        order.setTotalAmount(cart.getTotal());
        order.setStatus("PLACED");

        List<OrderItemDTO> itemDTOList = new ArrayList<>();

        for (CartItem cartItem : cart.getItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(cartItem.getProduct());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setPrice(cartItem.getProduct().getPrice());

            order.getItems().add(orderItem);

            OrderItemDTO dto = new OrderItemDTO();
            dto.setProductName(cartItem.getProduct().getName());
            dto.setQuantity(cartItem.getQuantity());
            dto.setPrice(cartItem.getProduct().getPrice());

            itemDTOList.add(dto);
        }

        OrderDTO dto = new OrderDTO();
        dto.setId(order.getId());
        dto.setOrderDate(order.getOrderDate());
        dto.setTotalAmount(order.getTotalAmount());
        dto.setStatus(order.getStatus());
        dto.setItems(itemDTOList);

        return dto;
    }

    // ✅ GET USER ORDERS
    public List<OrderDTO> getUserOrders(Long userId) {
        return new ArrayList<>(); // simple placeholder
    }

    // ✅ GET ORDER BY ID
    public OrderDTO getOrderById(Long orderId) {
        return new OrderDTO(); // simple placeholder
    }
}