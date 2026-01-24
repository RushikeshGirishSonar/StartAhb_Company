package com.company.Order.Utility;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import org.springframework.security.core.userdetails.UserDetailsService;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String header = request.getHeader("Authorization");
        System.out.println("Authorization Header: " + request.getHeader("Authorization"));
        if (header != null && header.startsWith("Bearer ")) {

            try {

                String token = header.substring(7);
                String username = jwtUtil.extractUsername(token);


                if (username != null &&
                        SecurityContextHolder.getContext().getAuthentication() == null) {

                    UserDetails userDetails =
                            userDetailsService.loadUserByUsername(username);
                    ;
                    UsernamePasswordAuthenticationToken auth =
                            new UsernamePasswordAuthenticationToken(
                                    userDetails,
                                    null,
                                    userDetails.getAuthorities()
                            );
                    SecurityContextHolder.getContext().setAuthentication(auth);
                }
            } catch (Exception e){
                // 🔴 VERY IMPORTANT
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.getWriter().write("Invalid or expired JWT token");
                return; // ⛔ stop filter chain
            }
        }
        System.out.println("JWT FILTER HIT");

        filterChain.doFilter(request, response);
        }

}
