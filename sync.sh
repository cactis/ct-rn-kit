# watchman -- trigger $PWD cr '**/*.js' -- sh sync.sh
for i in $@
do
 cp $i ~/ramdisk/ct-rn-kit/$i
done
