package in.yash.foodiesapi.controller;

import in.yash.foodiesapi.Service.CartService;
import in.yash.foodiesapi.io.CartRequest;
import in.yash.foodiesapi.io.CartResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api/cart")
@AllArgsConstructor
public class CartController {

    private final CartService cartService;
    @PostMapping
    public CartResponse addToCart(@RequestBody CartRequest request){
        String foodId = request.getFoodId();
        if(foodId == null || foodId.isEmpty()){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Foodid not found");
        }
        return cartService.addToCart(request);

    }
}
