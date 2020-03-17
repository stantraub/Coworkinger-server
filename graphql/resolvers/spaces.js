const Space = require('../../models/Space')
const checkAuth = require('../../util/checkAuth')
module.exports = {
  Query: {
    async getSpaces() {
      try {
        const spaces = await Space.find();
        return spaces;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getSpace(_, { spaceId }) {
      try {
        const space = await Space.findById(spaceId);
        if (space) {
          return space;
        } else {
          throw new Error("Space not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createSpace(_, { ...args }, context) {
        const user = checkAuth(context)


        const newSpace = new Space({
          name: args.spaceInput.name,
          address: args.spaceInput.address,
          city: args.spaceInput.city,
          state: args.spaceInput.state,
          zipcode: args.spaceInput.zipcode,
          description: args.spaceInput.description,
          email: args.spaceInput.email,
          cost: +args.spaceInput.cost,
          phone: args.spaceInput.phone,
          website: args.spaceInput.website,
          openHour: args.spaceInput.openHour,
          closingHour: args.spaceInput.closingHour,
          neighborhood: args.spaceInput.neighborhood,
          officeCapacity: args.spaceInput.officeCapacity,
          peopleCapacity: args.spaceInput.peopleCapacity,
          availability: args.spaceInput.availability,
          deskDay: args.spaceInput.deskDay,
          sharedDesk: +args.spaceInput.sharedDesk,
          meetingRooms: +args.spaceInput.meetingRooms,
          hours24Access: args.spaceInput.hours24Access,
          transitStationMiles: args.spaceInput.transitStationMiles,
          wellnessRoom: args.spaceInput.wellnessRoom,
          phoneBooths: args.spaceInput.phoneBooths,
          eventSpace: args.spaceInput.eventSpace,
          bikeParking: args.spaceInput.bikeParking,
          petFriendly: args.spaceInput.petFriendly,
          snacksDrinksIncluded: args.spaceInput.snacksDrinksIncluded,
          teaCoffeeIncluded: args.spaceInput.teaCoffeeIncluded,
          pingPong: args.spaceInput.pingPong,
          billiards: args.spaceInput.billiards,
          foosball: args.spaceInput.foosball,
          showers: args.spaceInput.showers,
          onsiteGym: args.spaceInput.onsiteGym,
          printersIncluded: args.spaceInput.printersIncluded,
          bocceBall: args.spaceInput.bocceBall,
          napRoom: args.spaceInput.napRoom,
          mainPhoto: args.spaceInput.mainPhoto
        });

        const space = await newSpace.save()

        return space
    }
  }
};