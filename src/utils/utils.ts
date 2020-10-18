import {UserDetailsInterface} from '../models/user-data.model';

// @desc    Extract and format user details  
// @access  Public
export function extractUserDetails(data: string, version: string): UserDetailsInterface | string {
      let userDetails: string[] = [];

      if (version === "v1") {
        userDetails = data.split(/([a-zA-Z]+0+)/);
        userDetails = userDetails.filter(val => val!='');
      }

      if (version === "v2") {
        userDetails = data.split(/([a-zA-Z]+)0+/);
        userDetails = userDetails.filter(val => val!='');
        const client = userDetails[2];
        if (client && client.length > 3) {
          userDetails[2] = `${client.substring(0, 3)}-${client.substring(3, client.length)}`;
        }
      }
      
      if (userDetails && userDetails.length >= 3) {
        let [firstName, lastName, clientId] = userDetails;
        return {
          firstName,
          lastName,
          clientId
        }
      }
      return '';
    }
  