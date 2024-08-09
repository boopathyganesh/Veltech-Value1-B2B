import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const AuthEndpoint = process.env.AUTH_ENDPOINT;

export const options = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                try {
                    console.log("credentials", credentials);

                    const contact = "+91" + credentials.phone_number;

                    // Ensure session_id is being passed through credentials
                    if (!credentials.session) {
                        throw new Error("Session ID is required for OTP verification.");
                    }

                    // Make the OTP verification request
                    const response = await axios.post(`${AuthEndpoint}/verify`, {
                        phone_number: contact,
                        otp: credentials.otp,
                        session: credentials.session, // Use the correct session ID from credentials
                    });

                    const otpData = response.data; // Extract the data from the response
                    if (otpData) {
                        // Return a user object with relevant data
                        return { ...otpData, role: "User" };
                    } else {
                        console.error("OTP Verification failed.");
                    }

                } catch (error) {
                    console.error("Error during authorization:", error);
                }
                return null; // Return null if authorization fails
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role;
            return session;
        },
    },
    pages: {
        signIn: '/auth', // Custom sign-in page
    },
};

export default NextAuth(options);
