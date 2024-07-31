"use server";

import { gql } from "@apollo/client";
import client from "@/shared/lib/apolloClient";
import { cookies } from "next/headers";

const LOGIN_MUTATION = gql`
  mutation Login($LoginInput: LoginInput!) {
    login(LoginInput: $LoginInput) {
      success {
        accessToken
        refreshToken
        expiresIn
        user {
          email
          userType
          roles {
            type
            ref
          }
          profile {
            firstName
            lastName
          }
        }
      }
      error {
        code
        message
      }
    }
  }
`;
interface LoginInput {
  email: string;
  password: string;
}

export const login = async (data: LoginInput) => {
  try {
    const response = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        LoginInput: data,
      },
    });
    if (response.data.login.success) {
      const { accessToken, refreshToken, expiresIn, user } =
        response.data.login.success;
      cookies().set("accessToken", accessToken, {
        maxAge: expiresIn,
      });
      cookies().set("refreshToken", refreshToken, {
        maxAge: expiresIn,
      });
      cookies().set("user", user, {
        maxAge: expiresIn,
      });
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};
