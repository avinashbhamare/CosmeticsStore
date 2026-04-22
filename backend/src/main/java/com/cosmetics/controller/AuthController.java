package com.cosmetics.controller;

import com.cosmetics.dto.AuthResponse;
import com.cosmetics.dto.LoginRequest;
import com.cosmetics.dto.MessageResponse;
import com.cosmetics.dto.RegisterRequest;
import com.cosmetics.security.JwtUtils;
import com.cosmetics.security.UserDetailsImpl;
import com.cosmetics.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        try {
            authService.register(request);
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        Authentication authentication = authService.authenticate(request);
        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        return ResponseEntity.ok(new AuthResponse(jwt, "Bearer",
                userDetails.getId(), userDetails.getName(), userDetails.getEmail(),
                userDetails.getAuthorities().iterator().next().getAuthority()));
    }
}