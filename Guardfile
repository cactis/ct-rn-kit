source = "~/_devs/_react/ct-rn-kit"
target = "/Volumes/RamDisk/ct-rn-kit"
`mkdir #{target}` if !Dir.exists?(target)

def copy_commend(target)
  excludeString =  ENV['excludeString']
  # p excludeString
  "rsync -avzhPR --delete * --exclude={#{excludeString}} #{target}"
end
# --exclude={.git,ios/build,android/app/build,ios/Pods,ios/Podfile.lock,node_modules,yarn.lock,package-lock.json} \


sync_command = copy_commend(target)

`#{sync_command}`

# `cd ~/ramdisk/ct-rn-kit/example; react-native run-ios --simulator='Example (12.1)'`

guard :shell do

  watch(%r{./*}) {
    # `cd #{target}; rsync -avzhPR *lock* package.json  #{srouce}/`
    `#{sync_command}`

    a = `ps aux | grep Simulator`
    if a.length > 20000
      print "nothing\n"
    else
      print "run simulator\n"
      # `cd ~/ramdisk/ct-rn-kit/example; react-native run-ios --simulator='Example (12.1)'`
    end

    # ['ctnews', 'anypod', 'demo', 'writus'].each do |app|
    ['writus', 'ctnews', 'ct-rn-kit/example', 'coffus', 'readus'].each do |app|
      p app
      # ['writus', 'ctnews'].each do |app|
      target = "/Volumes/RamDisk/#{app}/node_modules/ct-rn-kit"
      if Dir.exists?(target)
        # `open #{target}/node_modules/ct-rn-kit/`
        command = copy_commend("#{target}/")
        `#{command}`
      end
    end

    target = "/Users/cactis/_devs/_react/ct-rn-kit/example/node_modules/ct-rn-kit/"
    `#{copy_commend("#{target}")}` if Dir.exists?(target)

    ['coffus', 'readus', 'writus'].each do |t|
      p "copy to #{t}"
      target = "/Users/cactis/www/writus/apps/#{t}/node_modules/ct-rn-kit/"
      `#{copy_commend("#{target}")}` if Dir.exists?(target)
    end


  }

end
