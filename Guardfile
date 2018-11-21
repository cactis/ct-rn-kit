source = "~/_devs/_react/ct-rn-kit"
target = "/Volumes/RamDisk/ct-rn-kit"
`mkdir #{target}` if !Dir.exists?(target)

def copy_commend(target)
  "rsync -avzhPR --delete * \
  --exclude={.git,ios/build,android/app/build,node_modules,yarn.lock,package-lock.json} \
  #{target}"
end

sync_command = copy_commend(target)

`#{sync_command}`


guard :shell do

  watch(%r{./*}) {
    # `cd #{target}; rsync -avzhPR *lock* package.json  #{srouce}/`
    `#{sync_command}`

    a = `ps aux | grep Simulator`
    if a.length > 20000
      print "nothing\n"
    else
      print "run simulator\n"
      `cd ~/ramdisk/ct-rn-kit/example; react-native run-ios`
    end


    # ['ctnews', 'anypod', 'demo', 'writus'].each do |app|
    ['writus', 'ctnews', 'ct-rn-kit/example'].each do |app|
      # ['writus', 'ctnews'].each do |app|
      target = "/Volumes/RamDisk/#{app}"
      if Dir.exists?(target)
        # `open #{target}/node_modules/ct-rn-kit/`
        command = copy_commend("#{target}/node_modules/ct-rn-kit/")
        `#{command}`
      end
    end
  }

end
