React-nice
==========

Provision new server
--------------------

1. Install ansible on your laptop
2. Check ip address of the new server at ``etc/ansible/hosts``
2. Run ``provision.yml`` playbook
```
cd etc/ansible
ansible-playbook provision.yml
```

Installation and running
------------------------

Add storybook.localhost host to ``/etc/hosts``

Up:
```
docker-compose up --build
```

Down:
```
docker-compose down --volumes
```
