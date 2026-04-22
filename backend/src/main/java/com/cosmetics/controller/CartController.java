package com.cosmetics.controller;

import com.cosmetics.dto.AddToCartRequest;
import com.cosmetics.dto.CartDTO;
import com.cosmetics.security.UserDetailsImpl;
import com.cosmetics.service.CartService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public ResponseEntity<CartDTO> getCart(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(cartService.getCartByUserId(userDetails.getId()));
    }

    @PostMapping("/add")
    public ResponseEntity<CartDTO> addToCart(@AuthenticationPrincipal UserDetailsImpl userDetails,
            @Valid @RequestBody AddToCartRequest request) {
        return ResponseEntity.ok(cartService.addToCart(userDetails.getId(), request));
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<CartDTO> updateCartItem(@AuthenticationPrincipal UserDetailsImpl userDetails,
            @PathVariable Long productId,
            @RequestParam Integer quantity) {
        return ResponseEntity.ok(cartService.updateCartItem(userDetails.getId(), productId, quantity));
    }

    @DeleteMapping("/clear")
    public ResponseEntity<?> clearCart(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        cartService.clearCart(userDetails.getId());
        return ResponseEntity.ok(new com.cosmetics.dto.MessageResponse("Cart cleared"));
    }
}