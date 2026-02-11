package in.yash.foodiesapi.Service;

import in.yash.foodiesapi.io.CartRequest;
import in.yash.foodiesapi.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);
}
