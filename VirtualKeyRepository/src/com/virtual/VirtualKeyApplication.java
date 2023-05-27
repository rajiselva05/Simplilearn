package com.virtual;

import java.io.File;

import com.virtual.screen.WelcomeScreen;

public class VirtualKeyApplication {
	public static void main(String[] args) {
		WelcomeScreen welcome = new WelcomeScreen();
    	welcome.intro();
    	welcome.GetUserInput();

		
	}
}