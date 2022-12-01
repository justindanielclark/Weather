files='ls ./*.svg'
for eachfile in $files
do
  name=${eachfile:2}
  name2=${name%.svg}
  string="import $name2 from '$eachfile'"
  echo $string >> IconMap.js
done

echo "const IconMap = {" >> IconMap.js

for eachfile in $files;
do
  name=${eachfile:2}
  name2=${name%.svg}
  string="$name2,"
  echo $string >> IconMap.js
done

echo "}" >> IconMap.js
echo "export default IconMap;" >> IconMap.js