DIR="onpremise-storage-unit"
if node -v; then
  echo "Node is installed"
else
  echo "Node is not installed"
  echo "Please install node.js and npm before running this script"
  exit 1;
fi
if pm2 -v; then
  echo "PM2 is installed"
  echo "Killing PM2 Instance"
  pm2 kill
else
  echo "PM2 is not installed"
  echo "Installing PM2"
  npm install pm2 -g
fi
#if [ -d "$DIR" ]; then
#  ### Dir exists and pulling changes from GitHub ###
#  echo "Pulling changes for ${DIR}..."
#  cd ${DIR}
#  git pull https://github.com/jetlexa-official/onpremise-storage-unit
#else
#  ###  dir doesnt exists ###
#  echo "${DIR} not found. Cloning repo."
#  git clone https://github.com/jetlexa-official/onpremise-storage-unit
#  cd onpremise-storage-unit
#fi
echo "Pulling changes for ${DIR}..."
git pull
npm install
npm run build
npm run pm2:start