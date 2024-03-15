#arguments
ARG NODE_VERSION=19
#sets the base image for the react app
#FROM node:20-alpine
FROM node:${NODE_VERSION}
#create the user with permission to run the app
# -S -> create a system user
# -G -> add the user to the group
# this is done to prevent running the app as root
#RUN addgroup app && adduser -S -G app app
# sets the user to run the app
#USER app
WORKDIR /app
COPY package.json .
#somtimes cnt access filesan throws an error change the ownership
#of the files to the root user
#USER root
#RUN chown -R app:app .
#change the user back to app user
#USER app
#install dependencies
RUN npm install
#copy the rest files to working directory
COPY . .
#expose port 5173 to tell Docker that
#the container listens on the specified network ports at runtime
EXPOSE 3000
#Command to run the app
CMD ["npm", "run", "start"]
# to run docker run 5173:5173  <image>
# docker stop <id>
# docker prune || docker rm <aa7> --force