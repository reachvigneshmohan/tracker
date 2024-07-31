"use server";

import { gql } from "@apollo/client";
import client from "@/shared/lib/apolloClient";

const REGISTER_USER = gql`
  mutation Register($createUserInput: CreateUserInput!) {
    register(createUserInput: $createUserInput) {
      success {
        email
        userType
        profile {
          firstName
          lastName
        }
        roles {
          type
          ref
        }
      }
      error {
        code
        message
      }
    }
  }
`;

interface RegisterInput {
  email: string;
  userType: string;
  passwordHash: string;
  profile: {
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
  };
  roles?: {
    type: string;
    ref: string;
  }[];
}

// export const register = (registerInput: RegisterInput) => async () => {
//   try {
//     console.log(registerInput);
//     const response = await client.mutate({
//       mutation: REGISTER_USER,
//       variables: {
//         createUserInput: registerInput,
//       },
//     });
//     console.log(response);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

export const register = async (data: RegisterInput) => {
  try {
    console.log(data);
    const response = await client.mutate({
      mutation: REGISTER_USER,
      variables: {
        createUserInput: data,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
