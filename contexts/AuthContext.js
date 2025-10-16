"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// TODO: Integrate with Supabase Auth or your authentication system
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // TODO: Check for existing session on app load
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      // TODO: Get user session from Supabase or your auth system
      // const { data: { session } } = await supabase.auth.getSession();
      // if (session) {
      //   setUser(session.user);
      // }
      
      // Placeholder - check for auth token in cookies/localStorage
      const token = localStorage.getItem('auth-token');
      if (token) {
        // TODO: Verify token and get user data
        // const userData = await verifyToken(token);
        // setUser(userData);
        
        // Placeholder user data
        setUser({
          id: 'demo-user',
          email: 'demo@empresa.com',
          name: 'Usuario Demo',
          role: 'user',
          company: 'Mi Empresa S.A. de C.V.'
        });
      }
    } catch (error) {
      console.error('Error checking session:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      
      // TODO: Sign in with Supabase Auth
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });
      
      // if (error) throw error;
      
      // Placeholder authentication
      if (email && password) {
        const userData = {
          id: 'demo-user',
          email,
          name: email.split('@')[0],
          role: email.includes('admin') ? 'admin' : 'user',
          company: 'Mi Empresa S.A. de C.V.'
        };
        
        setUser(userData);
        localStorage.setItem('auth-token', 'demo-token');
        
        return { success: true };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (userData) => {
    try {
      setLoading(true);
      
      // TODO: Sign up with Supabase Auth
      // const { data, error } = await supabase.auth.signUp({
      //   email: userData.email,
      //   password: userData.password,
      //   options: {
      //     data: {
      //       first_name: userData.firstName,
      //       last_name: userData.lastName,
      //       company: userData.company,
      //     }
      //   }
      // });
      
      // if (error) throw error;
      
      // Placeholder sign up
      return { success: true };
    } catch (error) {
      console.error('Sign up error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      // TODO: Sign out from Supabase Auth
      // await supabase.auth.signOut();
      
      // Clear local state and storage
      setUser(null);
      localStorage.removeItem('auth-token');
      
      // Redirect to home page
      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const resetPassword = async (email) => {
    try {
      // TODO: Reset password with Supabase Auth
      // const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      //   redirectTo: `${window.location.origin}/reset-password`,
      // });
      
      // if (error) throw error;
      
      // Placeholder
      return { success: true };
    } catch (error) {
      console.error('Reset password error:', error);
      return { success: false, error: error.message };
    }
  };

  const updateProfile = async (updates) => {
    try {
      // TODO: Update user profile in Supabase
      // const { data, error } = await supabase.auth.updateUser({
      //   data: updates
      // });
      
      // if (error) throw error;
      
      // Update local user state
      setUser(prev => ({ ...prev, ...updates }));
      
      return { success: true };
    } catch (error) {
      console.error('Update profile error:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// TODO: Implement token verification
async function verifyToken(token) {
  // This would verify the JWT token and return user data
  // Placeholder implementation
  return {
    id: 'demo-user',
    email: 'demo@empresa.com',
    name: 'Usuario Demo',
    role: 'user',
    company: 'Mi Empresa S.A. de C.V.'
  };
}
