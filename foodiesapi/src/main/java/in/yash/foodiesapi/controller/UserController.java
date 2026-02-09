package in.yash.foodiesapi.controller;

import in.yash.foodiesapi.Service.AppUserDetailsService;
import in.yash.foodiesapi.Service.UserService;
import in.yash.foodiesapi.io.AutheticationResponse;
import in.yash.foodiesapi.io.UserRequest;
import in.yash.foodiesapi.io.UserResponse;
import in.yash.foodiesapi.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;
    private final AppUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;


    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AutheticationResponse register(@RequestBody UserRequest request) {
        UserResponse response = userService.registerUser(request);
        // load user details and generate jwt token
        final UserDetails userDetails = userDetailsService.loadUserByUsername(response.getEmail());
        final String jwtToken = jwtUtil.generateToken(userDetails);
        return new AutheticationResponse(response.getEmail(), jwtToken);
    }
}
