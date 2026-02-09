package in.yash.foodiesapi.io;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AutheticationResponse {
    private String email;
    private String token;
}
