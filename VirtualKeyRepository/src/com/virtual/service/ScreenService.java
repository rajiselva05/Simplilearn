package com.virtual.service;

import com.virtual.screen.*;
import com.virtual.directory.*;


public class ScreenService {
	public static WelcomeScreen WelcomeScreen = new WelcomeScreen();
    public static FileOptions FileOptions = new FileOptions();
    
    

    public static Screen CurrentScreen = WelcomeScreen;

    
    public static Screen getCurrentScreen() {
        return CurrentScreen;
    }

    
    public static void setCurrentScreen(Screen currentScreen) {
        CurrentScreen = currentScreen;
    }
}
