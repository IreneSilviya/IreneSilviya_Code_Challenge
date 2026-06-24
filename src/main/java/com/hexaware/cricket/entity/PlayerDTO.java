package com.hexaware.cricket.entity;

import jakarta.validation.constraints.Min;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

public class PlayerDTO {

    @NotBlank(message = "Player name is required")
    private String playerName;

    @Min(value = 1, message = "Jersey number must be greater than 0")
    private Integer jerseyNumber;

    @Enumerated(EnumType.STRING)
    @NotBlank(message = "Role required")
    private Role role;

    @Min(value = 0, message = "0 or more")
    private Integer totalMatches;

    @NotBlank(message = "Team Name required")
    private String teamName;

    @NotBlank(message = "Required")
    private String countryStateName;

    private String description;
}